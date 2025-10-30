 
<div align="center">
 <br>
 <br>
 <img width="795" height="466" alt="Image" src="https://github.com/user-attachments/assets/57af9428-de21-4b6e-95c1-0bbeed26167c" /> 
<img width="795" height="466" alt="Image" src="https://github.com/user-attachments/assets/f955c468-a2cd-4e74-81ed-c4f322a26782" />
 <br>
 <br>
</div>

---
**Date:** October 2025  
**Version:** 1.0  
**Status:** Active Development  
**Author:** [@sehxxnee](https://github.com/sehxxnee)

---

## Motivation

This design system was created to address design inconsistencies and reduce the time required to build and improve products.
By establishing a unified system, I aim to enhance design consistency, component reusability, and development efficiency.

---

## Implementation



### Atomic Design Principles
- **Atoms:** The smallest building blocks of the UI.  
- **Molecules:** Groups of two or more Atoms combined to form a functional unit.  
- **Organisms:** Complex UI sections composed of Molecules and Atoms.



### Standard Component Structure
```
ComponentName/
├── index.tsx                  # Component logic and TypeScript interfaces
├── style.module.scss          # Component-specific SCSS module
└── ComponentName.stories.tsx  # Storybook documentation (Default story only)
```



### Design Tokens
```scss
@import '../../../styles/abstracts/tokens';
@import '../../../styles/abstracts/mixins';
```



### Storybook Documentation
- Each component includes a Default story.  
- Props are controlled using argTypes.  
- `tags: ['autodocs']` enables automatic documentation generation.  
 

---

## References

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)  
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)  
- [Storybook Documentation](https://storybook.js.org/docs)  
- [SCSS Modules](https://github.com/css-modules/css-modules)  
- [Web Accessibility (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/)  

 
