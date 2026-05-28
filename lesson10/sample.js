// Sample recursive data structure: a file system tree

const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "documents",
      type: "folder",
      children: [
        {
          name: "resume.pdf",
          type: "file",
          size: 120,
        },
        {
          name: "projects",
          type: "folder",
          children: [
            {
              name: "project1.docx",
              type: "file",
              size: 80,
            },
            {
              name: "notes.txt",
              type: "file",
              size: 20,
            },
          ],
        },
      ],
    },
    {
      name: "photos",
      type: "folder",
      children: [
        {
          name: "vacation.jpg",
          type: "file",
          size: 200,
        },
        {
          name: "family.png",
          type: "file",
          size: 150,
        },
      ],
    },
    {
      name: "todo.txt",
      type: "file",
      size: 10,
    },
  ],
};

// root/
// ├── documents/
// │   ├── resume.pdf (120 KB)
// │   └── projects/
// │       ├── project1.docx (80 KB)
// │       └── notes.txt (20 KB)
// ├── photos/
// │   ├── vacation.jpg (200 KB)
// │   └── family.png (150 KB)
// └── todo.txt (10 KB)

// root
// ├─ documents
// │  ├─ resume.pdf
// │  └─ projects
// │     ├─ project1.docx
// │     └─ notes.txt
// ├─ photos
// │  ├─ vacation.jpg
// │  └─ family.png
// └─ todo.txt

function countFiles(node) {
  if (node.type === "file") {
    return 1;
  }

  let total = 0;

  for (const child of node.children) {
    total += countFiles(child);
  }

  return total;
}

console.log(countFiles(fileSystem));
