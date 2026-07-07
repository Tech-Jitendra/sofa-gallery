import React from "react";

import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";


interface Props {
    children: React.ReactNode;
}



const queryClient = new QueryClient({

    defaultOptions: {

        queries: {

            // Data remains fresh for 5 minutes
            staleTime: 1000 * 60 * 5,


            // Retry failed API calls twice
            retry: 2,


            // Refetch when app comes back online
            refetchOnReconnect: true,


            // Disable automatic refetch when screen focuses
            // Mobile apps usually don't need this everywhere
            refetchOnWindowFocus: false,

        },


        mutations: {

            retry: false,

        },

    },

});



export default function QueryProvider({
    children,
}: Props) {


    return (

        <QueryClientProvider client={queryClient}>

            {children}

        </QueryClientProvider>

    );

}