export const formConfig = {
  vendorInformation: {
    label: "Vendor Details",
    subFields: [
      {
        subLabel: "Vendor Information",
        fields: [
          {
            type: "select",
            name: "vendor",
            label: "Vendor",
            options: [
              { value: "vendor1", label: "Vendor 1" },
              { value: "vendor2", label: "Vendor 2" },
              { value: "vendor3", label: "Vendor 3" },
            ],
            required: true,
          },
        ],
      },
    ],
  },
  invoiceDetails: {
    label: "Invoice Details",
    subFields: [
      {
        subLabel: "General Information",
        fields: [
          {
            type: "select",
            name: "purchaseOrderNumber",
            label: "Purchase Order Number",
            options: [
              { value: "po1", label: "PO 1" },
              { value: "po2", label: "PO 2" },
              { value: "po3", label: "PO 3" },
            ],
            required: true,
          },
        ],
      },
      {
        subLabel: "Invoice Details",
        fields: [
          {
            type: "select",
            name: "invoiceNumber",
            label: "Invoice Number",
            options: [
              { value: "invoice1", label: "Invoice 1" },
              { value: "invoice2", label: "Invoice 2" },
              { value: "invoice3", label: "Invoice 3" },
            ],
            required: true,
          },
          {
            type: "date",
            name: "invoiceDate",
            label: "Invoice Date",
            required: true,
          },
          {
            type: "text",
            name: "totalAmount",
            label: "Total Amount",
            required: true,
          },
          {
            type: "select",
            name: "paymentTerms",
            label: "Payment Terms",
            options: [
              { value: "net30", label: "Net 30" },
              { value: "net45", label: "Net 45" },
              { value: "net60", label: "Net 60" },
              { value: "immediate", label: "Immediate" },
            ],
            required: true,
          },
          {
            type: "date",
            name: "invoiceDueDate",
            label: "Invoice Due Date",
            required: true,
          },
          {
            type: "date",
            name: "glPostDate",
            label: "GL Post Date",
            required: true,
          },
          {
            type: "text",
            name: "invoiceDescription",
            label: "Invoice Description",
            required: true,
          },
        ],
      },
      {
        subLabel: "Expense Details",
        fields: [
          {
            type: "text",
            name: "lineAmount",
            label: "Line Amount",
            required: true,
            startAdornment: "₹",
          },
          {
            type: "select",
            name: "department",
            label: "Department",
            options: [
              { value: "department1", label: "Department 1" },
              { value: "department2", label: "Department 2" },
              { value: "department3", label: "Department 3" },
            ],
            required: true,
          },
          {
            type: "select",
            name: "account",
            label: "Account",
            options: [
              { value: "account1", label: "Account 1" },
              { value: "account2", label: "Account 2" },
              { value: "account3", label: "Account 3" },
            ],
            required: true,
          },
          {
            type: "select",
            name: "location",
            label: "Location",
            options: [
              { value: "location1", label: "Location 1" },
              { value: "location2", label: "Location 2" },
              { value: "location3", label: "Location 3" },
            ],
            required: true,
          },
          {
            type: "text",
            name: "description",
            label: "Description",
            required: true,
          },
        ],
      },
    ],
  },
  comments: {
    label: "Comments",
    subFields: [
      {
        subLabel: "",
        fields: [
          {
            type: "text",
            name: "comments",
            label: "Comments",
          },
        ],
      },
    ],
  },
};
