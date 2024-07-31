import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const PdfViewer = () => (
    <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc' }}>
        <Document file="https://example.com/sample.pdf">
            <Page pageNumber={1} />
        </Document>
    </div>
);

export default PdfViewer;
