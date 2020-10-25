function () {

    url = document.getElementById('kategori');

    helper.data = function () {
        DB.query(`SELECT * FROM project`, async (a) => {

            dd = await a.map((a, i) => {
                return `
                    <tr>
                        <th>${a.kode}</th>
                        <th>${a.nama}</th>
                        <th class="center" width="80px">
                        <a class = "btn btn-info btn-sm"
                        href="${helper.siteurl('project-menu/' + a.kode)}" > view </a>
                        <button modal-hapus class="btn btn-danger btn-sm" data-id="${a.kode}">del</button>
                        </th>
                    </tr>
                `;
            }).join('');

            url.innerHTML = `

                <table id="domini" class = "table" >
                    <thead>
                        <tr>
                            <th>kode</th>
                            <th>nama</th>
                            <th class="center" width="80px">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dd}       
                    </tbody>
                </table>
            
            `;

            setTimeout(() => {
                $('#domini').DataTable({
                    responsive: true
                });
            }, 100)

        })
    }

    helper.data();

    $('#myform').submit(function (event) {
        event.preventDefault();

        var dataf = $(this).serializeArray();

        var d = {}

        dataf.forEach((item) => {
            d[item.name] = item.value;
        })

        DB.create('project', d, function (a) {
            helper.data();
        })

    })

    $("body").on("click", '[modal-hapus]', function () {
        helper.id = $(this).attr('data-id');
        $("#hapus").modal('show');
    })


    $('.hapus').click(function () {
        DB.delete('project', {
            kode: helper.id
        }, function () {
            helper.data();
            $("#hapus").modal("toggle")
        })
    })

}