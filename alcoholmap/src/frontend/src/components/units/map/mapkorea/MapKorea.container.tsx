import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import MapKoreaPageUI from './MapKorea.presenter';
import { useRouter } from 'next/router';

export default function MapKoreaPage(): JSX.Element{
    const svgRef = useRef<SVGSVGElement>(null);
    const [name, setName] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        fetch('/koreaborderdata.json')
            .then(response => response.json())
            .then(koreaMapData => {
                const drawMap = (data: any) => {
                    const projection = d3.geoMercator().fitSize([500, 500], data);
                    const path = d3.geoPath(projection);

                    svg.selectAll("path")
                        .data(data.features)
                        .enter().append("path")
                        .attr("d", path)
                        .attr("stroke", "black")
                        .attr("fill", "lightgray")
                        .on("click", (event: MouseEvent, d: any) => handleMapClick(d.properties.name))
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
                drawMap(topojson.feature(koreaMapData, koreaMapData.objects.skorea_provinces_2018_geo));
            })
            .catch(error => {
                console.error('Error fetching korea border data:', error);
            });
    }, []);

    const handleMapClick = (name: string) => {
        console.log(`Clicked on ${name}`);
        setName(name);
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
    }

    return (
        <MapKoreaPageUI
            svgRef={svgRef}
            name={name}
            onClickMoveToMapPage = {onClickMovetoMapPage}
            onClickMoveToMainPage = {onClickMoveToMainPage}
        />
    );
};