import { useEffect, useState } from "react";
import * as d3 from "d3";
import OrgChartComponent from "../components/organisationChart/OrgChartComponent";

const OrganizationChart = () => {
  const [data, setData] = useState(null);
  let addNodeChildFunc = null;

  function addNode() {
    const node = {
      nodeId: "new Node",
      parentNodeId: "O-6066",
    };

    addNodeChildFunc(node);
  }

  function onNodeClick(nodeId) {
    alert("clicked " + nodeId);
  }

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
    ).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="bg-white p-4 font-semibold">
      Click node to trigger action in parent or &nbsp;
      <button
        className="bg-purple-700 text-white p-1 px-3 rounded"
        onClick={() => addNode()}
      >
        add node as root&apos;s child
      </button>
      <OrgChartComponent
        setClick={(click) => (addNodeChildFunc = click)}
        onNodeClick={onNodeClick}
        data={data}
      />
    </div>
  );
};

export default OrganizationChart;
