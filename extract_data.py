import docx
import pandas as pd
import json
import os

def extract_docx(file_path):
    doc = docx.Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return "\n".join(full_text)

def extract_excel_summary(file_path):
    xls = pd.ExcelFile(file_path)
    summary = {}
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet_name)
        # Just get the first few rows/columns to understand the structure
        summary[sheet_name] = df.head(10).to_dict()
    return summary

docx_path = "Initiation of Coverage_ Vadilal Enterprises Limited - Strategic Restructuring and the Quick Commerce Ice Cream Boom.docx"
excel_path = "vadilal_FM.xlsx"

data = {
    "report_text": extract_docx(docx_path),
    "excel_summary": extract_excel_summary(excel_path)
}

with open("extracted_data.json", "w") as f:
    json.dump(data, f, indent=4)
