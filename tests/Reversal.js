const { click, write, goto, text, into, textBox, below, $, closeBrowser, waitFor } = require("taiko");
const assert = require("assert");

step("Login to Kerisi using <uid> and <password>", async function(uid, password)
 {
	await goto('fimsv2.kerisi.my');
	await write(uid, into(textBox(below("username"))));
	await write(password, into(textBox(below("password"))));
	await click("log in");
});

step("Goto Reversal page", async function() {
	await click($('//*[@id="header"]/div[1]/a[2]')); //main dashboard
    await click('General Ledger', below('petty cash'));
	await waitFor(2000);
    await click('Reversal');
	await waitFor(2000);
});

step("Open Reverse new form screen", async function() {
	await click('Reverse New Form');
    await write('JNL00009/21', into($('//*[@id="Reversal_filter"]/label/div/div/input'))); //search journal
	await waitFor(3000);
    await click($('//*[@id="Reversal"]/tbody/tr[1]/td[11]/a')); //view journal

});


step("verify <datatable>", async function(datatable) {
	console.log("Start verify input data...");

	for( let row of datatable.rows){
		//console.log(row);
		// console.log("Status to test : " + row.cells[3] + " and system id : " + row.cells[4]);
		// Status
		assert.ok(await text(row.cells[3]).exists(), "Status must be " + row.cells[3]);
		// System id
		assert.ok(await text(row.cells[4]).exists(), "System id must be " + row.cells[4]);
		// fund type	
		assert.ok(await text(row.cells[5]).exists(), true, "fund type must be " + row.cells[5]);
		// activity
		assert.ok(await text(row.cells[6]).exists(), true, "activity must be " + row.cells[6]);
		// ptj
		assert.ok(await text(row.cells[7]).exists(), true, "ptj must be " + row.cells[7]);
		// cost centre
		assert.ok(await text(row.cells[8]).exists(), true, "cost centre must be " + row.cells[8]);
		// account code
		assert.ok(await text(row.cells[9]).exists(), true, "account code must be " + row.cells[9]);
		// amount
		assert.ok(await text(row.cells[10]).exists(), true, "amount must be " + row.cells[10]);
		// reference
		assert.ok(await text(row.cells[11]).exists(), true, "reference must be " + row.cells[11]);
	}
});

step("Click reverse to create a new reverse journal", async function() {
	click('back');
});

step("Logout", async function() {
	await waitFor(3000)
	await click($('//*[@id="header"]/div[2]/div/a'));
	await waitFor(2000)			
	await click('sign out');
	await waitFor(2000)
	await click('yes');
	await closeBrowser();
});

step("Click on reverse journal to be verify with <journal_id>", async function(journal_id) {
	await click($('//*[@id="app"]/div[1]/div[2]/div[2]')); //general ledger module
	await write(journal_id, into($('//*[@id="dt_todo_filter"]/label/input'))); //search journal
	await click($('//*[@id="dt_todo"]/tbody/tr/td[2]/a'));
});

step("verify details for verification<datatable_2>", async function(datatable_2) {
	for (let row of datatable_2.rows){
		assert.ok(await text(row.cells[3]).exists(), "Status must be " + row.cells[3]);
		// System id
		assert.ok(await text(row.cells[4]).exists(), "System id must be " + row.cells[4]);
		// fund type	
		assert.ok(await text(row.cells[5]).exists(), true, "fund type must be " + row.cells[5]);
		// activity
		assert.ok(await text(row.cells[6]).exists(), true, "activity must be " + row.cells[6]);
		// ptj
		assert.ok(await text(row.cells[7]).exists(), true, "ptj must be " + row.cells[7]);
		// cost centre
		assert.ok(await text(row.cells[8]).exists(), true, "cost centre must be " + row.cells[8]);
		// account code
		assert.ok(await text(row.cells[9]).exists(), true, "account code must be " + row.cells[9]);
		// amount
		assert.ok(await text(row.cells[10]).exists(), true, "amount must be " + row.cells[10]);
		// reference
		assert.ok(await text(row.cells[11]).exists(), true, "reference must be " + row.cells[11]);
	};
});

step("click save and submit", async function() {
	await click('back');
});

step("Click on reverse journal to be approve", async function() {
	await click($('//*[@id="app"]/div[1]/div[2]/div[2]')); //general ledger module
	await write('JRV00005/21', into($('//*[@id="dt_todo_filter"]/label/input'))); //search journal
	await click($('//*[@id="dt_todo"]/tbody/tr/td[2]/a'));
});

step("verify details for approval<datatable_3>", async function(datatable_3) {
	for (let row of datatable_3.rows){
		assert.ok(await text(row.cells[3]).exists(), "Status must be " + row.cells[3]);
		// System id
		assert.ok(await text(row.cells[4]).exists(), "System id must be " + row.cells[4]);
		// fund type	
		assert.ok(await text(row.cells[5]).exists(), true, "fund type must be " + row.cells[5]);
		// activity
		assert.ok(await text(row.cells[6]).exists(), true, "activity must be " + row.cells[6]);
		// ptj
		assert.ok(await text(row.cells[7]).exists(), true, "ptj must be " + row.cells[7]);
		// cost centre
		assert.ok(await text(row.cells[8]).exists(), true, "cost centre must be " + row.cells[8]);
		// account code
		assert.ok(await text(row.cells[9]).exists(), true, "account code must be " + row.cells[9]);
		// amount
		assert.ok(await text(row.cells[10]).exists(), true, "amount must be " + row.cells[10]);
		// reference
		assert.ok(await text(row.cells[11]).exists(), true, "reference must be " + row.cells[11]);
	};
});