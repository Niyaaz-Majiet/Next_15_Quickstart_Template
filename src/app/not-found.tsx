import PageView from "@/components/PageView/PageView";

export default function NotFound() {
    return (
      <PageView>
        <h1 className="w-fit self-center text-9xl text-blue-600">Not found – 404!</h1>
        <div className="flex w-full justify-center">
          <a href="/">Go back to Home</a>
        </div>
      </PageView>
    )
  }