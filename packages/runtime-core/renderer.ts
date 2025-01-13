export interface RendererOptions<HostNode = RenderNode> {
  setElementText(node: HostNode, text: string): void
}

export interface RenderNode {
  [key: string]: any
}

export interface RenderElement extends RenderNode {}

export type RootRenderFunction<HostNode = RenderNode> = (
  message: string,
  container: HostNode,
) => void

export const createRenderer = (options: RendererOptions) => {
  const { setElementText } = options
  const render: RootRenderFunction = (message, container) => {
    setElementText(container, message)
  }
  return { render }
}
