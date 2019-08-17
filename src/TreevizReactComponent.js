import * as React from "react";
import * as Treeviz from "treeviz";

export class TreevizComponent extends React.Component {
  componentDidMount() {
    this.treeviz = Treeviz.create({
      htmlId: "tree",
      idKey: "id",
      hasFlatData: true,
      relationnalField: "father",
      isHorizontal: false,
      hasPanAndZoom: true,
      nodeWidth: 160,
      nodeHeight: 80,
      mainAxisNodeSpacing: '2',
      secondaryAxisNodeSpacing: 1.1,
      linkWidth: () => 5,
      linkShape: 'orthogonal',
      renderNode: ({ data }) => (
        `<div style='height:100%; width:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; flex-wrap: wrap; text-align: center; background-color: ${data.color}; border-radius:200px;'><div style="font-size:18px;">` +
        data.text_1 +
        "</br><div style='font-size: 14px;'>" +
        data.text_2 +
        "</div></div>" ),
      linkColor: data => "#B0BEC5",
    });
    this.treeviz.refresh(this.props.data);
  }
  componentDidUpdate() {
    this.treeviz.refresh(this.props.data);
  }
  render() {
    return <div id="tree" style={{ width: '100vw', height: '100vh' }} />;
  }
}
