import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MedicalHistory {
  id: number;
  patientName: number;
  appointment: string;
  date: string;
  status: number;
  mockProfilePicture: string;
}

type MedicalHistoryResponse = MedicalHistory[];

export const medicalHistoryApi = createApi({
  reducerPath: "medicalHistoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API }),
  tagTypes: [],
  endpoints: (build) => ({
    getMedicalHistory: build.query<MedicalHistoryResponse, void>({
      query: () => "medical-history",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetMedicalHistoryQuery } = medicalHistoryApi;
