import PasswordEntropyCalculator from "./pieces/entropycalculator";


export default function Portfolio() {
    return (
        <div className="text-center mb-20">
            <h2 className="text-2xl lg:text-3xl py-2">
                My <span className="text-emerald-600">Portfolio</span>
            </h2>

            <PasswordEntropyCalculator />
        </div>
        
    );
  }