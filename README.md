# Laravel & NextUI Template

This is a template for creating applications using Laravel 11 and NextUI (v2).

## Technologies Used

- [Laravel 11](https://laravel.com/)
- [NextUI v2](https://nextui.org/)
- [PHP v8.2](https://www.php.net/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)

## How to Use

### Use the template with create-Laravel

To create a new project based on this template using `create-Laravel`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/Laravel-template.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.
