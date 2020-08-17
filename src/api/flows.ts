import { FlowType, Flow } from "../state/reducer";

const flowsKey = (email: string, flowType: FlowType) =>
  `${FlowType[flowType]}.${email}`;

export function getFlows(email: string, flowType: FlowType): Flow[] {
  const key = flowsKey(email, flowType);
  const flows = (JSON.parse(localStorage.getItem(key) as string) || []) as Flow[];
  return flows;
}

function setFlows(email: string, flowType: FlowType, flows: Flow[]): void {
  const key = flowsKey(email, flowType);
  localStorage.setItem(key, JSON.stringify(flows));
}

export function addFlow(email: string, flowType: FlowType, flow: Flow): boolean {
  const flows = getFlows(email, flowType);
  flows.push(flow);
  setFlows(email, flowType, flows);
  return true;
}
