import { CloudOff } from "lucide-react";
import { ReactNode } from "react";
import { Spinner } from "../ui/spinner";

type Props = {
  error: string | null;
  loading: boolean;
  message: string;
  children: ReactNode;
  size?: {
    width: number;
    height: number;
  };
};

export default function Loading({
  error,
  loading,
  message,
  children,
  size,
}: Readonly<Props>) {
  return (
    <>
      {error ? (
        <div className="flex flex-col gap-8 h-full w-full items-center justify-center">
          <CloudOff className="w-10 h-10" />
          <h3 className="text-center">{`${error}`}</h3>
        </div>
      ) : loading ? (
        <div className="flex flex-col gap-8 h-full w-full items-center justify-center">
          <Spinner
            className={size ? `w-${size.width} h-${size.height}` : "w-10 h-10"}
          />
          <h3 className="text-center">{message}</h3>
        </div>
      ) : (
        children
      )}
    </>
  );
}
