import ReactMarkdown from "react-markdown";

export interface ViewerProps {
  value: string;
}

export default function Viewer(props: ViewerProps) {
  return <ReactMarkdown>{props.value}</ReactMarkdown>;
}
