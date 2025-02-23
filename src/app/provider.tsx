"use client";
import Spinner from "@/components/Spinner/Spinner";
import { AppStore, persistor, store } from "../redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<Spinner/>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
