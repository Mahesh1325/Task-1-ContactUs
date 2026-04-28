
import UserForm from "@/components/forms/UserForm";
import ReduxViewer from "@/store/redux/ReduxViewer";

export default function GlobalStatePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Global State Management
      </h1>

      <UserForm />

      <ReduxViewer />
    </div>
  );
}
