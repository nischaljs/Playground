"use client"

import { useEffect } from "react"

const error = ({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) => {
    useEffect(() => {
        console.error(error);
    }, [error])
    return (
        <div>
            <h2>something went wrong
                <br />
                {error.message}
            </h2>
            <button
                onClick={

                    () => {
                        alert("pressed the button");
                        return reset()
                    }
                }
            >
                try Again
            </button>
        </div>
    )
}

export default error
