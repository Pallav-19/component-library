import { useLayoutEffect, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { OrgChart } from "d3-org-chart";

const OrgChartComponent = ({ data, setClick, onNodeClick }) => {
  const d3Container = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    function addNode(node) {
      if (chartRef.current) {
        chartRef.current.addNode(node);
      }
    }

    setClick(addNode);
  }, [setClick]);

  useLayoutEffect(() => {
    if (data && d3Container.current) {
      if (!chartRef.current) {
        chartRef.current = new OrgChart();
      }
      chartRef.current
        .container(d3Container.current)
        .data(data)
        .nodeWidth(() => 200)
        .nodeHeight(() => 120)
        .onNodeClick((d) => {
          console.log(d, "Id of clicked node");
          onNodeClick(d);
        })
        .render();
    }
  }, [data, onNodeClick]);

  return <div ref={d3Container} />;
};

OrgChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setClick: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
};

export default OrgChartComponent;
