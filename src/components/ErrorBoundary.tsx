import { Component, ReactNode } from "react";

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  State
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("页面渲染错误:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
          <h1 className="text-xl font-bold text-ink mb-2">页面出错了</h1>
          <p className="text-ink/60 mb-4 text-sm">
            {this.state.error?.message || "渲染时发生未知错误"}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.hash = "#/";
              window.location.reload();
            }}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            返回首页
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
