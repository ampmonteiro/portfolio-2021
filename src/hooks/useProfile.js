import { reactive, toRefs } from 'vue';

const data = reactive({
  error: null,
  loading: true,
  result: null,
});

const readProfileFile = async () => {
  try {
    const req = await fetch('/assets/profile.json');

    if (!req.ok) {
      throw req;
    }

    const rs = await req.json();

    data.loading = false;

    data.result = rs;

    writeStorage(rs);

    return rs;
  } catch (er) {
    console.log(er);
    data.error = er.status;
    data.loading = false;
  }
};

const writeStorage = (prof) => {
  const temp = JSON.stringify(prof);

  sessionStorage.setItem('ampm21', temp);
};

const readProfileStorage = () => {
  data.result = JSON.parse(sessionStorage.getItem('ampm21'));

  data.loading = false;
};

const existStorage = !!sessionStorage.getItem('ampm21');

export const useProfile = () => {
  const { error, loading, result } = toRefs(data);

  return {
    readProfile: existStorage ? readProfileStorage : readProfileFile,
    resultProfile: result,
    errorProfile: error,
    loadingProfile: loading,
  };
};
