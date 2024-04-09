import { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import MapKoreaPageUI from './MapKorea.presenter';
import { useRouter } from 'next/router';
import { BarData } from './MapKorea.types';

export default function MapKoreaPage(): JSX.Element{
    const svgRef = useRef<SVGSVGElement>(null);
    const [name, setName] = useState<string>("");
    const [top10Bars, setTop10Bars] = useState<BarData[]>([]);
    const router = useRouter();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        // -----------------------------
        const dummyData = generateDummyData();
        setTop10Bars(dummyData);
        // -----------------------------
        fetch('/koreaborderdata.json')
            .then(response => response.json())
            .then(koreaMapData => {
                const drawMap = (data: any) => {
                    const projection = d3.geoMercator().fitSize([380, 380], data);
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
                              .attr("fill", "#4caf50")
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
    };

    const onClickMoveToThisBar = (address: string) => {
        router.push({
            pathname: '/map',
            query: {
                keyword: address
            }
        });
    };

    // -----------------------
    const generateDummyData = (): BarData[] => {
        const dummyData = [];
        for (let i = 1; i <= 10; i++) {
            dummyData.push({
                name: `주점 ${i}`,
                rating: Math.floor(Math.random() * 5) + 1, // 랜덤한 평점 (1~5)
                reviewCount: Math.floor(Math.random() * 100) + 1, // 랜덤한 리뷰 갯수 (1~100)
                address: `서울 도봉구 노해로 384`, // 더미 주소
            });
        }
        return dummyData;
    };
    // ------------------------
    return (
        <MapKoreaPageUI
            svgRef={svgRef}
            name={name}
            onClickMoveToMapPage = {onClickMovetoMapPage}
            onClickMoveToMainPage = {onClickMoveToMainPage}
            top10Bars={top10Bars}
            onClickMoveToThisBar={onClickMoveToThisBar}
        />
    );
};