import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './core/layouts/navigation-layout/navigation-layout.component';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { TestComponent2Component } from './test-component2/test-component2.component';

export const appRoutes: Routes = [
    // {
    //     path: '',
    //     children: [
    //         {
    //             path: 'analytics',
    //             component: NavigationLayoutComponent,
    //             loadChildren: () => import('./feature-modules/analytics/analytics.module').then(m => m.AnalyticsModule)
    //         },
    //         {
    //             path: '',
    //             pathMatch: 'full',
    //             redirectTo: 'analytics'
    //         },
    //         {
    //             path: '**',
    //             redirectTo: 'analytics'
    //         }
    //     ]
    // },
    {
        path: 'analytics',
        component: NavigationLayoutComponent,
        loadChildren: () => import('./feature-modules/analytics/analytics.module').then((m) => m.AnalyticsModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'analytics'
    },
    {
        path: '**',
        component: TestComponent1Component
    }
]