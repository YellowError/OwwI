import { useEffect } from "react";
import { useRouter } from "next/router";

const LayoutConnected = ({ user, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user && !localStorage.getItem("req-token")) router.push("/login");
  }, [user]);

  return (
    <>
      {user ? (
        <main className="container mx-auto">{children}</main>
      ) : (
        <main>Redirecting...</main>
      )}
    </>
  );
};

export default LayoutConnected;
