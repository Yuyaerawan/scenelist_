import { getFirestore, collection } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const db = getFirestore(nuxtApp.$firebaseApp);
  const modelsRef = collection(db, "todos");

  return {
    provide: {
      db,
      modelsRef,
    },
  };
});
