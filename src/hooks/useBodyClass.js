import { useEffect } from "react";

// Add class to body with kit Id
const useBodyClass = (kitId) => {
    useEffect(() => {
        if (!kitId) return;
        document.body.classList.add(`elementor-kit-${kitId}`);
        
        // Clean up function
        return () => document.body.classList.remove(`elementor-kit-${kitId}`);
    }, [kitId]);
};

export default useBodyClass