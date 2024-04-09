import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const IndexPage = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // 경계선 JSON 데이터 가져오기
        fetch('/koreaborderdata.json')
            .then(response => response.json())
            .then(koreaMapData => {
                // 경계선을 그리는 함수
                const drawMap = (data: any) => {
                    const projection = d3.geoMercator().fitSize([500, 500], data);
                    const path = d3.geoPath(projection);

                    // 경계선을 그림
                    svg.selectAll("path")
                        .data(data.features)
                        .enter().append("path")
                        .attr("d", path)
                        .attr("stroke", "black")
                        .attr("fill", "lightgray")
                        // 각 도를 클릭할 수 있도록 이벤트 핸들러 추가
                        .on("click", (event: MouseEvent, d: any) => handleMapClick(d.properties.name))
                        // 마우스 호버 효과 추가
                        // 마우스 호버 효과 및 커서 변경 추가
                        .on("mouseover", function(this: SVGPathElement, event: MouseEvent, d: any) {
                          d3.select(this)
                              .attr("fill", "skyblue")
                              .style("cursor", "pointer"); // 커서 변경
                        })
                        .on("mouseout", function(this: SVGPathElement, event: MouseEvent, d: any) {
                          d3.select(this)
                              .attr("fill", "lightgray")
                              .style("cursor", "default"); // 원래 커서로 변경
                        });
                };

                // 대한민국 지도 그리기
                drawMap(topojson.feature(koreaMapData, koreaMapData.objects.skorea_provinces_2018_geo));
            })
            .catch(error => {
                console.error('Error fetching korea border data:', error);
            });
    }, []);

    // 클릭한 도의 이름을 출력하는 함수
    const handleMapClick = (name: string) => {
        console.log(`Clicked on ${name}`);
        // 이 부분에서 클릭한 도에 대한 추가 작업을 수행할 수 있습니다.
    };

    return (
        <svg ref={svgRef} width="500" height="500"></svg>
    );
};

export default IndexPage;