# TeacherMatcher

An educational matching platform connecting teachers with companies, built with Next.js 14 and React 18.

## 🚀 Tech Stack

- **Framework**: Next.js 14.0.4
- **React**: 18.2.0
- **Language**: JavaScript
- **Styling**: Tailwind CSS + SASS
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📋 System Requirements

### Node.js Version

- **Minimum Version**: Node.js 18.17.0
- **Recommended Version**: Node.js 20.x LTS
- **Maximum Version**: Node.js 21.x

### Why Node.js 18.17.0+?

- Next.js 14 requires Node.js 18.17.0 or higher
- Supports ES2022 features
- Better performance and security

## 🔧 Installing Node.js

### Method 1: Direct Installation

1. Visit [Node.js Official Website](https://nodejs.org/)
2. Download and install the LTS version
3. Verify installation: `node --version`

### Method 2: Using fnm (Recommended)

#### Installing fnm

**Windows (PowerShell):**

```powershell
# Using winget
winget install fnm

# Or using Chocolatey
choco install fnm
```

**macOS:**

```bash
# Using Homebrew
brew install fnm

# Or using curl
curl -fsSL https://fnm.vercel.app/install | bash
```

**Linux:**

```bash
# Using curl
curl -fsSL https://fnm.vercel.app/install | bash
```

#### Configuring fnm

**Windows (PowerShell):**

```powershell
# Add the following to your PowerShell profile
fnm env --use-on-cd | Out-String | Invoke-Expression
```

**macOS/Linux:**

```bash
# Add the following to ~/.bashrc, ~/.zshrc, or ~/.profile
eval "$(fnm env --use-on-cd)"
```

#### Using fnm to Install Node.js

```bash
# Install the latest LTS version
fnm install --lts

# Install a specific version
fnm install 20.11.0

# Use a specific version
fnm use 20.11.0

# Set default version
fnm default 20.11.0

# List installed versions
fnm list

# List available versions
fnm list-remote
```

## 📦 Installing Dependencies

### Using pnpm (Recommended)

```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install project dependencies
pnpm install
```

### Using npm

```bash
npm install
```

### Using yarn

```bash
yarn install
```

## 🚀 Development Environment

### Starting Development Server

```bash
pnpm dev
# Or
npm run dev
# Or
yarn dev
```

The development server will start at [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file and add necessary environment variables:

```env
# Database connection
DATABASE_URL="your_database_url"

# Authentication
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# Other service configurations
# ...
```

## 🏗️ Build and Deployment

### Building the Project

```bash
# Build production version
pnpm build
# Or
npm run build
# Or
yarn build
```

### Starting Production Server

```bash
# Start production server
pnpm start
# Or
npm run start
# Or
yarn start
```

### Build Output

After building, production files will be generated in the `.next` directory.

## 🧹 Code Quality

### Linting

```bash
# Check code quality
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

### Code Formatting

```bash
# Format code
pnpm format

# Check formatting
pnpm format:check
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js 13+ App Router
│   ├── [locale]/       # Internationalization routes
│   │   ├── teachers/   # Teacher-related pages
│   │   └── layout.js   # Page layout
│   ├── globals.sass    # Global styles
│   └── providers.js    # Global providers
├── components/          # Reusable components
├── i18n/               # Internationalization config
├── lib/                 # Utility functions
├── messages/            # Translation files
└── store/               # Zustand state management
```

## 🌍 Internationalization

The project supports multiple languages:

- Chinese (zh)
- English (en)

Language switching is implemented through URL paths: `/zh/teachers`, `/en/teachers`

## 🎨 Styling System

- **Tailwind CSS**: Utility-first CSS framework
- **SASS**: Preprocessor supporting variables, mixins, etc.
- **Responsive Design**: Supports various screen sizes

## 📱 Responsive Design

The project adopts responsive design, supporting:

- Desktop (lg+)
- Tablet (md)
- Mobile (sm)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Set environment variables
3. Automatic deployment

### Other Platforms

- Netlify
- AWS Amplify
- Self-hosted servers

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or suggestions, please:

- Open an Issue
- Contact the development team
- Check project documentation

---

**Note**: Make sure to use the correct Node.js version, as this is crucial for the project to run properly!
