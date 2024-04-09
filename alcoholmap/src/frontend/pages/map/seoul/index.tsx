import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const SeoulMap = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // 서울시 자치구 경계 데이터 가져오기
    fetch('/seoulborderdata.json')
      .then(response => response.json())
      .then(seoulMapData => {
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
              // 클릭 이벤트 추가
              .on("click", (event: MouseEvent, d: any) => handleMapClick(event, d))
              // 마우스 호버 효과 추가
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

        // 서울시 지도 그리기
        drawMap(topojson.feature(seoulMapData, seoulMapData.objects["서울시 자치구 경계3"]));
      })
      .catch(error => {
        console.error('Error fetching Seoul map data:', error);
      });
  }, []);

  // 클릭한 구 이름을 출력하는 함수
  const handleMapClick = (event: MouseEvent, d: any) => {
      console.log(`Clicked on ${d.properties.SIG_KOR_NM}`);
      // 이 부분에서 클릭한 구에 대한 추가 작업을 수행할 수 있습니다.
  };

  return (
    <svg ref={svgRef} width="1000" height="1000"></svg>
  );
};

export default SeoulMap;