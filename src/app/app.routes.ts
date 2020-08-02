import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './core/layouts/navigation-layout/navigation-layout.component';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { TestComponent2Component } from './test-component2/test-component2.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: NavigationLayoutComponent,
        children: [
            {
                path: 'componentA',
                component: TestComponent1Component
            },
            {
                path: 'componentB',
                component: TestComponent2Component
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'componentA'
            },
            {
                path: '**',
                redirectTo: 'componentA'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]