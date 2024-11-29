"use client";

import { useVerifyUserQuery } from "@/toolkit/api/authApi";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";

const MyComponent = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  if (!token) {
    router.push("/not-found");
  }
  const { data, isLoading, isError, isSuccess } = useVerifyUserQuery(token);
  useEffect(() => {
    if (isError) {
      router.push("/not-found");
    }
    if (isSuccess) {
      router.push("/");
    }
  }, [data, isSuccess, isError, isLoading]);
  return <div></div>;
};

const VerifyUser = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default VerifyUser;
