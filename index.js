import { Table } from './app.js';

const table = new Table({
  columns: ['Name', 'Age', 'Email'],
  data: [
    ['dafah fabian syah', '24', 'davarobiansyah@gmail.com'],
    ['dafahfabiansyah', '17', 'tkj20-dafahfabiansyah@bns.sch.id'],
  ],
});

const app = document.getElementById('app');
table.render(app);
