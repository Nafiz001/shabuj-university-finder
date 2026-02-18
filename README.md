# Shabuj University Finder

A high-performance, SEO-optimized university finder web application built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates advanced server-side rendering, filtering, and comparison features for helping students find their ideal study abroad university.

## 🚀 Live Demo

[Deploy Link - Coming Soon]

## 📋 Features

### Core Features
- **Advanced Server-Side Filtering**: All filtering logic runs on the backend for optimal performance
- **Comprehensive Search Criteria**:
  - Filter by country, city
  - Tuition fee range (min/max)
  - Global ranking range
  - Established year
  - IELTS requirements
  - Scholarship availability
  - Multiple sorting options (by tuition or ranking, ascending/descending)

### Innovative Features
- **Compare Universities**: Select and compare up to 2 universities side-by-side in an interactive modal
- **Dynamic SEO**: Metadata updates based on active filters for better search engine visibility
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Real-time Results Count**: Shows the number of matching universities
- **Loading States**: Smooth skeleton loaders during data fetching
- **Smart Highlighting**: Compare feature highlights better values for easy decision making

### Technical Excellence
- ✅ Next.js 14 App Router with Server Components
- ✅ TypeScript for type safety
- ✅ Server-side filtering (no client-side data processing)
- ✅ SEO-optimized with dynamic metadata
- ✅ Clean Architecture with separation of concerns
- ✅ Accessible UI with semantic HTML
- ✅ Performance-optimized rendering
- ✅ Git workflow with conventional commits

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Next.js API Routes
- **Data**: In-memory data store (easily replaceable with database)

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
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   ├── Filters.tsx               # Filter form component
│   ├── UniversityCard.tsx        # University display card
│   ├── UniversityList.tsx        # University grid with compare logic
│   └── CompareModal.tsx          # Side-by-side comparison modal
├── lib/
│   └── universities.ts           # Data model and filtering logic
└── ...config files
```

## 🎯 Key Implementation Details

### Server-Side Filtering

All filtering happens on the server using Next.js Server Components and API routes. The filtering logic is centralized in `lib/universities.ts` and can be easily adapted to work with a database.

```typescript
// Example filter parameters
{
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

### Compare Feature

Innovative comparison system that:
- Allows selection of up to 2 universities
- Displays side-by-side comparison in a modal
- Highlights better values (lower tuition, better ranking, etc.)
- Provides contextual tips for decision making

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nafiz001/shabuj-university-finder.git
cd shabuj-university-finder
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
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

The dataset includes 30 real universities from countries including USA, UK, Canada, Australia, Germany, Singapore, and more.

## 🎨 Design Principles

1. **Mobile-First**: Responsive design that works on all devices
2. **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
3. **Performance**: Server Components, optimized rendering, minimal client-side JS
4. **User Experience**: Clear visual feedback, loading states, helpful error messages
5. **Scalability**: Clean architecture ready for database integration

## 🔄 Git Workflow

This project follows conventional commit standards:

- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code refactoring
- `style:` Styling changes
- `chore:` Maintenance tasks

All commits are small, focused, and descriptive.

## 🌟 Innovative Additions

Beyond the basic requirements, this project includes:

1. **Smart Compare System**: Visual highlighting of better values in comparison
2. **Sticky Selection Bar**: Persistent UI element showing selected universities
3. **Filter Persistence**: URL-based filtering for shareable links
4. **Empty States**: Helpful messaging when no results are found
5. **Visual Feedback**: Icons, colors, and animations for better UX

## 🔮 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- User authentication for saving favorite universities
- Advanced filters (programs offered, campus facilities, student reviews)
- Map view integration
- Export comparison as PDF
- Email alerts for scholarship opportunities

## 👨‍💻 Development Approach

This project was built with senior-level engineering practices:

- Type-safe code with TypeScript
- Separation of concerns (data, logic, presentation)
- Reusable component architecture
- Performance-first rendering strategy
- Clean, maintainable code structure
- Comprehensive error handling

## 📝 License

This project was created as part of a technical assessment for Shabuj Global Education.

## 🤝 Contributing

This is an assessment project, but feedback and suggestions are welcome!

## 📧 Contact

For questions or feedback, please contact: [Your Email]

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
