import MathJaxComponent from "../../MathJaxComponent";
type RestSolutionProps = {
  restSolution: string[];
};
export default function RestSolution({ restSolution }: RestSolutionProps) {
  return restSolution.map((line, index) => (
    <div key={index} className="line">
      <MathJaxComponent latex={line} className="line" />
    </div>
  ));
}
