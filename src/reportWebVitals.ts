import { ReportHandler, getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import reportWebVitals from './reportWebVitals';  // Ensure the path is correct

// Renamed local function to avoid conflict
const handleWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default handleWebVitals;  // Export the renamed function
