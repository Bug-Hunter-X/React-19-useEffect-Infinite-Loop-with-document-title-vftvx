# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19 applications involving the `useEffect` hook and updates to `document.title`.  Improperly updating `document.title` inside `useEffect` without dependencies can lead to an infinite loop, causing performance issues and application crashes.

## Problem
The provided code updates `document.title` every time the `count` state variable changes. This triggers a re-render of the component, which in turn updates `document.title`, causing an infinite loop.

## Solution
The solution involves adding `count` as a dependency to the `useEffect` hook.  This ensures the effect only runs when `count` changes, preventing the infinite loop.  A more efficient way is to memoize `document.title` updates.