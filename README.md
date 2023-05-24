This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page22222.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Components hierarchy
Atomic Design methodology. 
In this case, you can divide your components into the following categories:

Atoms: These are the smallest units which don't make sense on their own but serve as building blocks for larger components. Atoms are simple UI elements like buttons, text fields, labels, etc.
Examples of components:
Button: Used for all kinds of actions.
Input: Form fields for entering text.
Label: Labels for form fields.

Molecules: These are groups of atoms bonded together and operating as a single unit. Molecules are more complex components consisting of several atoms.
Examples of components:
FormInput: A component that includes Label, Input, and validation error messages.
ButtonGroup: A group of related buttons.

Organisms: These are relatively large assemblies of atoms and molecules bonded together to form a distinct section of the user interface.
Examples of components:
Header: The page header, including a logo, navigation, and other elements.
Form: A complete form containing various FormInput components and buttons.

Templates: Templates are page structures that illustrate UI layout and organization, but don't contain actual content yet.
Examples of components:
ProductPageTemplate: A template for a product page.
HomePageTemplate: A template for a homepage.

Pages: Pages are instances of templates with actual, application-specific data.
Examples of components:

ProductPage: A product page with actual product data.
HomePage: A homepage with actual data.
Depending on the complexity and size of your project, you may add more categories or skip some of them. It's important that the structure is clear and understandable for your team.
