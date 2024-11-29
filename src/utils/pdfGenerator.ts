import jsPDF from "jspdf";

export const generateSummaryPDF = (summary: string) => {
  const doc = new jsPDF();

  // Add content to the PDF
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Summary of Interactions", 10, 10);
  doc.setFontSize(10);
  doc.text(summary, 10, 20, { maxWidth: 180 });

  // Save the PDF
  doc.save("interaction_summary.pdf");
};
