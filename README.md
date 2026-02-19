# Shabuj University Finder

A high-performance, SEO-optimized university finder web application built with Next.js 16, TypeScript, and Tailwind CSS. This modern platform helps students discover and compare universities worldwide with advanced filtering, real-time search, and side-by-side comparison features.

## 🚀 Live Demo

**[https://shabuj-university-finder.vercel.app/](https://shabuj-university-finder.vercel.app/)**

## 📋 Features

### Core Features
- **Real-Time Search**: Instantly search universities by name, city, or country with live filtering
- **Advanced Server-Side Filtering**: All filtering logic runs on the backend for optimal performance
- **Comprehensive Search Criteria**:
  - Search by name, city, or country
  - Filter by country
  - Tuition fee range slider (0 - $100,000)
  - Global ranking range
  - Established year
  - IELTS requirements
  - Scholarship availability
  - Multiple sorting options (by tuition or ranking, ascending/descending)

### Innovative Features
- **Compare Universities**: Select and compare up to 2 universities side-by-side in a sleek Material Design modal
- **Compact Comparison View**: Single-view comparison modal with no scrolling required
- **Smart Value Highlighting**: Automatic "Best Value" badges for universities with better ranking AND lower tuition
- **Dynamic Insights**: AI-powered comparison insights highlighting key differences
- **Material Design UI**: Modern, clean interface with Google Material Icons
- **Range Slider**: Interactive tuition fee slider with real-time value display
- **Dynamic SEO**: Metadata updates based on active filters for better search engine visibility
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Real-time Results Count**: Shows the number of matching universities
- **Smart Highlighting**: Visual indicators for better values in comparisons
- **URL-based State**: Shareable filter URLs for easy collaboration

### Technical Excellence
- ✅ Next.js 16 (Turbopack) App Router with Server Components
- ✅ TypeScript for complete type safety
- ✅ Server-side filtering (zero client-side data processing)
- ✅ SEO-optimized with dynamic metadata generation
- ✅ Material Design aesthetic with Google Material Icons
- ✅ Clean Architecture with strict separation of concerns
- ✅ Accessible UI with semantic HTML and ARIA labels
- ✅ Performance-optimized rendering with async components
- ✅ Git workflow with conventional commits
- ✅ Deployed on Vercel with automatic CI/CD

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (Turbopack, App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Google Material Icons
- **API**: Next.js API Routes (Server Actions)
- **Data**: In-memory data store (easily replaceable with database)
- **Deployment**: Vercel
- **Version Control**: Git with conventional commits

## 📁 Project Structure

```
shabuj-university-finder/
├── app/
│   ├── api/
│   │   └── universities/
│   │       └── route.ts          # Server-side filtering API
│   ├── universities/
│   │   ├── page.tsx              # Main universities listing page
│   │   └── loading.tsx           # Loading skeleton
│   ├── layout.tsx                # Root layout with Material Icons
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles + animations
├── components/
│   ├── Filters.tsx               # Filter sidebar with range slider
│   ├── SearchBar.tsx             # Real-time search component
│   ├── UniversityCard.tsx        # University display card
│   ├── UniversityList.tsx        # University grid with compare logic
│   ├── CompareModal.tsx          # Compact side-by-side comparison modal
│   └── Navbar.tsx                # Navigation header
├── lib/
│   └── universities.ts           # Data model and filtering logic
└── ...config files
```

## 🎯 Key Implementation Details

### Real-Time Search

Live search functionality with debounced URL updates:
- Searches across university name, city, and country
- Updates URL with `?search=` parameter
- Works seamlessly with all other filters
- Includes clear button for quick reset

### Server-Side Filtering

All filtering happens on the server using Next.js Server Components and API routes. The filtering logic is centralized in `lib/universities.ts` and can be easily adapted to work with a database.

```typescript
// Example filter parameters
{
  search: "Harvard",
  country: "Canada",
  minTuition: 30000,
  maxTuition: 50000,
  minRanking: 1,
  maxRanking: 100,
  scholarshipAvailable: true,
  sortBy: "ranking",
  order: "asc"
}
```

### SEO Optimization

Dynamic metadata generation based on active filters:

```typescript
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  // Generates context-aware titles and descriptions
  // Updates Open Graph tags for social sharing
}
```
```

### Compare Feature

Innovative comparison system featuring:
- **Material Design Cards**: Beautiful card-based layout with university avatars
- **Color-Coded Avatars**: Unique color palette for each university
- **Compact Single-View Design**: No scrolling required - everything fits in one view
- **Smart Value Detection**: Automatic "Best Value" badges for universities with superior ranking AND lower tuition
- **Material Icons**: Visual indicators for each metric (ranking, location, tuition, IELTS, etc.)
- **Dynamic Insights**: Real-time comparison analysis highlighting key differences
- **Responsive Layout**: Adapts beautifully from mobile to desktop
- **Interactive Elements**: Hover effects, smooth animations, and clear CTAs

### Material Design Implementation
- **Google Material Icons** integrated throughout the application
- **Range Slider** for tuition fee filtering with real-time value display
- **Card-based Layout** for university listings and comparisons
- **Smooth Animations** with custom keyframe animations
- **Dark Mode Support** across all components
- **Elevation & Shadows** following Material Design elevation system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nafiz001/shabuj-university-finder.git
cd shabuj-university-finder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📊 Data Model

Each university contains:
- **id**: Unique identifier
- **name**: University name
- **country**: Country location
- **city**: City location
- **tuitionFee**: Annual tuition fee in USD
- **ranking**: Global ranking position
- **establishedYear**: Year of establishment
- **scholarshipAvailable**: Boolean for scholarship availability
- **ieltsRequirement**: Minimum IELTS score required

The dataset includes **30 real universities** from prestigious institutions worldwide:
- 🇺🇸 USA: Harvard, Stanford, MIT, Princeton, Yale, UC Berkeley
- 🇬🇧 UK: Oxford, Cambridge, Imperial, UCL, Edinburgh, Manchester, King's
- 🇨🇦 Canada: Toronto, UBC, McGill, Waterloo
- 🇦🇺 Australia: Melbourne, ANU, Sydney, Monash
- 🇨🇭 Switzerland: ETH Zurich
- 🇸🇬 Singapore: NUS, NTU
- 🇩🇪 Germany: TUM, LMU Munich
- 🇯🇵 Japan: University of Tokyo
- 🇰🇷 South Korea: Seoul National University
- 🇳🇿 New Zealand: University of Auckland
- 🇭🇰 Hong Kong: University of Hong Kong

## 🎨 Design Principles

1. **Material Design**: Following Google's Material Design principles for consistent, intuitive UI
2. **Mobile-First**: Responsive design that works flawlessly on all devices
3. **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation support
4. **Performance**: Server Components, optimized rendering, minimal client-side JavaScript
5. **User Experience**: Clear visual feedback, loading states, helpful error messages
6. **Scalability**: Clean architecture ready for database integration and feature expansion
7. **Dark Mode**: Complete dark mode support with proper contrast ratios

## 🔄 Git Workflow

This project follows conventional commit standards:

- `feat:` New features (e.g., `feat: add search functionality`)
- `fix:` Bug fixes (e.g., `fix: resolve hydration error`)
- `refactor:` Code refactoring (e.g., `refactor: optimize filter logic`)
- `style:` Styling changes (e.g., `style: update modal design`)
- `chore:` Maintenance tasks (e.g., `chore: update dependencies`)
- `docs:` Documentation updates (e.g., `docs: update README`)

All commits are small, focused, and descriptive for easy code review.

## 🌟 Innovative Additions

Beyond the basic requirements, this project includes:

1. **Real-Time Search Bar**: Live search with instant filtering across name, city, and country
2. **Smart Compare System**: 
   - Visual highlighting of better values in comparison
   - Automatic "Best Value" badge detection
   - Dynamic comparison insights
   - Compact single-view modal design
3. **Interactive Range Slider**: Custom-styled tuition fee slider with real-time value display
4. **Material Design Excellence**: 
   - Google Material Icons integration
   - Card-based layouts with elevation
   - Smooth animations and transitions
   - Complete dark mode support
5. **Filter Persistence**: URL-based filtering for shareable links
6. **Empty States**: Helpful messaging and clear CTAs when no results are found
7. **Visual Feedback**: Icons, colors, animations, and loading states for superior UX
8. **Independent Scrolling**: Sidebar filters with overscroll prevention
9. **Hydration-Safe Components**: Browser extension compatibility with suppressHydrationWarning
10. **Avatar Generation**: Color-coded university initials in comparison view

## 🔮 Future Enhancements

- Database integration (PostgreSQL/MongoDB with Prisma ORM)
- User authentication for saving favorite universities
- Advanced filters (programs offered, campus facilities, student reviews, acceptance rate)
- Interactive map view with geolocation
- Export comparison as PDF
- Email alerts for scholarship opportunities
- Student reviews and ratings system
- Virtual campus tours integration
- Application deadline tracking
- Financial aid calculator

## ⚡ Performance Optimizations

1. **Server Components**: Maximum use of React Server Components for zero client JS
2. **Async/Await**: Next.js 15+ async searchParams API for better performance
3. **Dynamic Routing**: `force-dynamic` export for API routes ensuring fresh data
4. **Code Splitting**: Automatic code splitting by Next.js for optimal bundle size
5. **Image Optimization**: Next.js Image component for university images (when needed)
6. **CSS Optimization**: Tailwind CSS with PurgeCSS for minimal CSS bundle
7. **Font Optimization**: Next.js font optimization for Google Fonts

## 👨‍💻 Development Approach

This project was built with senior-level engineering practices:

- **Type Safety**: Complete TypeScript implementation with strict mode
- **Separation of Concerns**: Clear separation of data, logic, and presentation layers
- **Component Architecture**: Reusable, composable components with single responsibility
- **Performance First**: Server-side rendering and filtering for optimal performance
- **Clean Code**: Readable, maintainable code with consistent naming conventions
- **Comprehensive Error Handling**: Edge case handling and user-friendly error messages
- **Git Discipline**: Conventional commits with frequent, focused commits
- **Code Review Ready**: Line-by-line reviewable code structure

## 🐛 Known Limitations & Solutions

### Image Optimization Warning
- **Issue**: Next.js shows warnings for external images without proper optimization
- **Current**: Using standard `<img>` tags for simplicity
- **Future**: Migrate to `next/image` with proper image CDN setup

### Static Data
- **Current**: In-memory data store with 30 universities
- **Ready for**: Easy migration to database with minimal code changes
- **Architecture**: Filtering logic is database-agnostic

## 📝 License

This project was created as part of a technical assessment for **Shabuj Global Education**.

## 🤝 Contributing

This is an assessment project. The codebase demonstrates production-ready patterns and can serve as a reference for:
- Next.js 16 App Router implementation
- Server-side filtering architecture
- Material Design with Tailwind CSS
- TypeScript best practices
- SEO optimization techniques

## 📧 Contact

**Repository**: [https://github.com/Nafiz001/shabuj-university-finder](https://github.com/Nafiz001/shabuj-university-finder)

**Live Demo**: [https://shabuj-university-finder.vercel.app/](https://shabuj-university-finder.vercel.app/)

---

**Built with ❤️ using Next.js 16, TypeScript, Tailwind CSS, and Material Design**

*Deployed on Vercel with automatic CI/CD*
