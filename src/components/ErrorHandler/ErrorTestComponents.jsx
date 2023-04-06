import React from "react";

export function ThrowError()
{
    throw new Response("Not Found",{status:500});
    return(
        <>
            <div>Test</div>
        </>
    );
}
