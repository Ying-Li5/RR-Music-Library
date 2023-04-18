import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfbEntry: ReportHandler | undefined) => {
  if (onPerfbEntry && onPerfbEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfbEntry);
      getFID(onPerfbEntry);
      getFCP(onPerfbEntry);
      getLCP(onPerfbEntry);
      getTTFB(onPerfbEntry);
    });
  }
};

export default reportWebVitals;
