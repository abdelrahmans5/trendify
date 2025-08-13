import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadComponent: () => import('./components/home/home').then(c => c.Home), title: 'Home'
    },
    {
        path: 'products', loadComponent: () => import('./components/products/products').then(c => c.Products), title: 'Products'
    },
    {
        path: '**', loadComponent: () => import('./components/home/home').then(c => c.Home)
    }
];
