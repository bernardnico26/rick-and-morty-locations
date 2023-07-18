
const Loader = () => {
    console.log("Loader component rendered");

    return (
        <div className="loader-container">
            <div className="loader">
                <div className="character">
                    <img src="https://giffiles.alphacoders.com/118/118792.gif" alt="" />
                </div>
                <div className="portal portal-left">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/391aa854-ba50-427b-a8ab-68392d1af18f/dbzojza-dd5f4d60-34cf-431b-8619-cca187513cd6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5MWFhODU0LWJhNTAtNDI3Yi1hOGFiLTY4MzkyZDFhZjE4ZlwvZGJ6b2p6YS1kZDVmNGQ2MC0zNGNmLTQzMWItODYxOS1jY2ExODc1MTNjZDYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IlFqT4BYKTqdov9pT9SiQLF8-4N739uRCjsHjyWL7ME" alt="" />
                </div>
                <div className="portal portal-right">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/391aa854-ba50-427b-a8ab-68392d1af18f/dbzojza-dd5f4d60-34cf-431b-8619-cca187513cd6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5MWFhODU0LWJhNTAtNDI3Yi1hOGFiLTY4MzkyZDFhZjE4ZlwvZGJ6b2p6YS1kZDVmNGQ2MC0zNGNmLTQzMWItODYxOS1jY2ExODc1MTNjZDYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IlFqT4BYKTqdov9pT9SiQLF8-4N739uRCjsHjyWL7ME" alt="" />
                </div>
                <div className="texto">
                    <h2>Loading</h2><h2>...</h2>
                </div>
            </div>
        </div>
    )
}

export default Loader
