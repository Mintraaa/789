let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  const customerPhone = document.getElementById("customerPhone").value;

  if (customerName && isValidPhoneNumber(customerPhone)) {
    const customer = { name: customerName, phone: customerPhone };
    queue.push(customer);
    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    updateQueueDisplay();
  } else {
    alert("Please enter valid name and phone number.");
  }
});


document.getElementById('dequeueBtn').addEventListener('click', () => {
    if (queue.length > 0) {
        const nextCustomer = queue.shift();
        alert(`Next customer: ${nextCustomer.name}, Phone: ${nextCustomer.phone}`);
        updateQueueDisplay();
    } else {
        alert('No more customers in the queue.');
    }
});

function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = '<h3>Queue</h3>';
    queue.forEach((customer, index) => {
        queueList.innerHTML += `<p>${index + 1}. ${customer.name} - ${customer.phone}</p>`;
    });
}

function isValidPhoneNumber(phoneNumber) {
  // เพิ่มตรวจสอบเบอร์โทรศัพท์ที่ต้องการ
  // ตัวอย่างเช่น ต้องมีความยาว 10 หลัก, เป็นตัวเลขเท่านั้น, เป็นเงื่อนไขอื่น ๆ
  return /^\d{10}$/.test(phoneNumber);
}