/// <reference types="node" />

import test from 'node:test';
import assert from 'node:assert/strict';
import { selectProjects } from '../data/projects.ts';
import { INTERESTS } from '../data/types.ts';

const interest1 = INTERESTS[0].label;
const interest2 = INTERESTS[1]?.label ?? INTERESTS[0].label;

test('returns recommended projects', () => {
  const result = selectProjects({
    interests: [interest1],
    skillLevel: 'Intermediate',
    techStack: ['Python'],
  });

  assert.ok(Array.isArray(result));
  assert.ok(result.length > 0);
});

test('returns at most three recommendations', () => {
  const result = selectProjects({
    interests: [interest2],
    skillLevel: 'Beginner',
    techStack: ['React'],
  });

  assert.ok(result.length <= 3);
});

test('every recommendation has a project title', () => {
  const result = selectProjects({
    interests: [interest1],
    skillLevel: 'Advanced',
    techStack: ['Python'],
  });

  for (const project of result) {
    assert.ok(project.title);
  }
});

test('recommendations contain match scores', () => {
  const result = selectProjects({
    interests: [interest1],
    skillLevel: 'Intermediate',
    techStack: ['Python'],
  });

  for (const project of result) {
    assert.equal(typeof project.matchScore, 'number');
  }
});

test('different inputs produce valid recommendations', () => {
  const first = selectProjects({
    interests: [interest1],
    skillLevel: 'Intermediate',
    techStack: ['Python'],
  });

  const second = selectProjects({
    interests: [interest2],
    skillLevel: 'Intermediate',
    techStack: ['React'],
  });

  assert.ok(first.length > 0);
  assert.ok(second.length > 0);
});