let rowMemory = ["MC", "MR", "M+", "M-", "MS"];

let rowStd1 = ["key1", "key2", "key3", "key4"];
let rowStd2 = ["key5", "key6", "key7", "key8"];
let rowStd3 = ["key9", "key10", "key11", "key12"];
let rowStd4 = ["key13", "key14", "key15", "key16"];
let rowStd5 = ["key17", "key18", "key19", "key20"];
let rowStd6 = ["key21", "key22", "key23", "key24"];

let rowSci1 = ["key1", "key2", "key3", "key4", "key5"];
let rowSci2 = ["key6", "key7", "key8", "key9", "key10"];
let rowSci3 = ["key11", "key12", "key13", "key14", "key15"];
let rowSci4 = ["key16", "key17", "key18", "key19", "key20"];
let rowSci5 = ["key21", "key22", "key23", "key24", "key25"];
let rowSci6 = ["key26", "key27", "key28", "key29", "key30"];
let rowSci7 = ["key31", "key32", "key33", "key34", "key35"];

const tableCalculator = document.getElementById("tableCalc");

function CreateMemoryLine() {
  let memoryLine = document.createElement("tr");
  memoryLine.setAttribute("id", "memoryLine");
  tableCalculator.appendChild(memoryLine);

  for (i = 0; i < rowMemory.length; i++) {
    let memoryCell = document.createElement("td");
    memoryLine.appendChild(memoryCell);
    memoryCell.innerHTML += rowMemory[i];
  }
}
CreateMemoryLine();
