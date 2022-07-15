
var submitBtn = document.getElementById('submit');
var moneyInput = document.getElementById('money');
var platformInput = document.getElementById('platform');
var result = document.querySelector('.result');

const fetchPlayers = async (money, platform) => {
    const api_call = await fetch(`https:// api.fortnitetracker.com/v1/profile/${platform}/${money}`, {
        headers: {
            'TRN-Api-Key': 'b3cdd27a-0b0a-4b51-9114-8bb2834cb715'
        }
    });

    const data = await api_call.json();
    return { data }
};

const showData = () => {
    fetchPlayers(moneyInput.value, platformInput.value).then((res) => {
        const markup = `
            <div class="stats text-center">
                <h1>${res.data.epicUserHandle}(${res.data.platformNameLong})</h1>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="stat">
                            <h5>${res.data.lifeTimeStats[8].value}</h5>
                            <h6>Income</h6>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="stat">
                            <h5>${res.data.lifeTimeStats[10].value}</h5>
                            <h6>expense</h6>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="stat">
                            <h5>${res.data.lifeTimeStats[7].value}</h5>
                            <h6>Income</h6>
                        </div>
                    </div>
                </div>
            </div>
        `;
        result.insertAdjacentHTML('beforeend', markup);
    })
        .catch(err => console.log(err));
};

const clearField = () => {
    Input.value = '';
    platformInput.value = 'Choose Platform';
};

const clearPlayer = () => {
    result.innerHTML = '';
}

submitBtn.addEventListener('click', function () {
    showData();
    clearField();
    clearPlayer();
});