
import * as React from 'react';
import { DataTable, Button, Text } from 'react-native-paper';
import { PDFDocument, PDFText, PDFView, PDFPage } from 'react-native-pdf-lib';

const MyComponent = () => {
  const [totalGeneral, setTotalGeneral] = React.useState(0);

  const generarPDF = async () => {
    const pdf = await PDFDocument.create();
    const page = pdf.addPage();

    const { width, height } = page.getSize();

    const text = new PDFText()
    .setText(`Total General: ${totalGeneral}`)
    .setFontSize(12)
    .setWidth(150)
    .setHeight(30)
    .setX(width - 160)
    .setY(height - 40);

  page.drawText(text);

    const pdfBytes = await pdf.save();

    // Guardar o compartir el PDF generado según tus necesidades
  };
    
  return (
    <DataTable>
      <Text variant="headlineMedium">Reporte de Ventas</Text>
      <DataTable.Header>
        <DataTable.Title>Producto</DataTable.Title>
        <DataTable.Title numeric>Cantidad</DataTable.Title>
        <DataTable.Title numeric>Precio</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell numeric>Refresco</DataTable.Cell>
        <DataTable.Cell numeric>2</DataTable.Cell>
        <DataTable.Cell numeric>15</DataTable.Cell>
        <DataTable.Cell numeric>30</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell numeric>Papas</DataTable.Cell>
        <DataTable.Cell numeric>4</DataTable.Cell>
        <DataTable.Cell numeric>20</DataTable.Cell>
        <DataTable.Cell numeric>80</DataTable.Cell>
      </DataTable.Row>
      <Text variant="headlineSmall">Total General: {totalGeneral}</Text>
      <Button mode="contained" onPress={generarPDF}>
        Generar PDF
      </Button>
    </DataTable>
  );
};

export default MyComponent;
