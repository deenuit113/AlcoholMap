import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import MapSeoulPageUI from './MapSeoul.presenter';
import { useRouter } from 'next/router';

export default function MapSeoulPage(): JSX.Element {
    const svgRef = useRef<SVGSVGElement>(null);
    const [name, setName] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        fetch('/seoulborderdata.json')
            .then(response => response.json())
            .then(seoulMapData => {
                const drawMap = (data: any) => {
                    const projection = d3.geoMercator().fitSize([360, 360], data);
                    const path = d3.geoPath(projection);

                    svg.selectAll("path")
                        .data(data.features)
                        .enter().append("path")
                        .attr("d", path)
                        .attr("stroke", "black")
                        .attr("fill", "lightgray")
                        .on("click", (event: MouseEvent, d: any) => handleMapClick(event, d))
                        .on("mouseover", function(this: SVGPathElement, event: MouseEvent, d: any) {
                            d3.select(this)
                                .attr("fill", "skyblue")
                                .style("cursor", "pointer");
                        })
                        .on("mouseout", function(this: SVGPathElement, event: MouseEvent, d: any) {
                            d3.select(this)
                                .attr("fill", "lightgray")
                                .style("cursor", "default");
                        });
                };
                drawMap(topojson.feature(seoulMapData, seoulMapData.objects["서울시 자치구 경계3"]));
            })
            .catch(error => {
                console.error('Error fetching Seoul map data:', error);
            });
    }, []);

    const handleMapClick = (event: MouseEvent, d: any) => {
        console.log(`Clicked on ${d.properties.SIG_KOR_NM}`);
        setName(d.properties.SIG_KOR_NM);
    };

    const onClickMovetoMapPage = () => {
        router.push({
            pathname: '/map',
            query: {
                keyword: `${name} 술집`
            }
        })
    };

    const onClickMoveToMainPage = () => {
        router.push('/map')
    };

    return (
        <MapSeoulPageUI
            svgRef={svgRef}
            name={name}
            onClickMoveToMapPage = {onClickMovetoMapPage}
            onClickMoveToMainPage = {onClickMoveToMainPage}
        />
    );
};