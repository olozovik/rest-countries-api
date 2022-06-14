import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      backgroundColor: string;
      textColor: string;
      inputColor: string;
      elementsColor: string;
      activeColor: string;
      boxShadow: string;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
